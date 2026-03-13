const FIELD_MAP = {
  Field31: {
    kit_field_key: 'current_focus',
    other_field: 'Field31_other_Other',
    answers: {
      "I'm interviewing for a new job": 'interview',
      "I have a job offer in hand or I'm expecting one soon": 'negotiate',
      "I'm planning to ask for a raise": 'raise',
      "I'm searching for my next job": 'Search',
      'Other': null
    }
  },
  Field34: {
    kit_field_key: 'industry',
    other_field: 'Field34_other_Other',
    answers: {
      'Tech': 'tech',
      'Finance': 'finance',
      'Sales': 'sales',
      'Medicine': 'medicine',
      'Other': null
    }
  },
  Field33: {
    kit_field_key: 'income',
    answers: {
      'I make less than $200,000 per year': '199',
      'I make between $200,000 and $399,000 per year': '200-399',
      'I make $400,000 or more per year': '400+'
    }
  }
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = new URLSearchParams(event.body);
  const body = Object.fromEntries(params);

  const subscriberId = body.Field29;
  if (!subscriberId) {
    console.error('Missing Kit subscriber ID (Field29) in webhook payload');
    return { statusCode: 400, body: 'Missing subscriber ID' };
  }

  const fields = {};
  for (const [fieldId, config] of Object.entries(FIELD_MAP)) {
    const submittedValue = body[fieldId];
    if (!submittedValue) continue;

    const kitValue = config.answers[submittedValue];
    if (kitValue !== undefined && kitValue !== null) {
      fields[config.kit_field_key] = kitValue;
    } else if (submittedValue === 'Other' && config.other_field) {
      const otherText = body[config.other_field];
      if (otherText) fields[config.kit_field_key] = otherText;
    }
  }

  if (Object.keys(fields).length === 0) {
    return { statusCode: 200, body: 'No fields to update' };
  }

  const response = await fetch(
    `https://api.convertkit.com/v3/subscribers/${subscriberId}?api_secret=${process.env.KIT_API_SECRET}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields })
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error('Kit API error:', response.status, error);
    return { statusCode: 500, body: 'Failed to update subscriber' };
  }

  return { statusCode: 200, body: 'OK' };
};
