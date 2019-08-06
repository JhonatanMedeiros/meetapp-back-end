import Bee from 'bee-queue';
import SubscriptionMail from '../app/jobs/SubscriptionMail';
import SubscriptionConfirmationMail from '../app/jobs/SubscriptionConfirmationMail';

const jobs = [SubscriptionMail, SubscriptionConfirmationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
          },
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Queue ${job.queue.name}: FAILED`, err);
    }
  }
}

export default new Queue();
