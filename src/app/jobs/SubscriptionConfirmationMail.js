import Mail from '../../lib/Mail';

class SubscriptionConfirmationMail {
  static get key() {
    return 'SubscriptionConfirmationMail';
  }

  static async handle({ data }) {
    const { meetup, user, formattedDate } = data;

    await Mail.sendMail({
      to: `${user.email} <${user.name}>`,
      subject: `[${meetup.title}] Inscrição Confirmada`,
      template: 'subscription_confirmation',
      context: {
        organizer: meetup.User.name,
        meetup: meetup.title,
        description: meetup.description,
        user: user.name,
        formattedDate,
      },
    });
  }
}

export default SubscriptionConfirmationMail;
