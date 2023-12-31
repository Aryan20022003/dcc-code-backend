const Queue = require('bull');

const jobQueue = new Queue('job-queue');

const addJob = async (jobId) => {
      await jobQueue.add({ jobId: 1 });
      console.log("Adding job");
      // console.log(jobQueue);
}

jobQueue.process(20, async (jobId) => {
      console.log(
            "Processing job with id: " + jobId.data
      );
      console.log(jobId);
})

setInterval(addJob, 500);

module.exports = { addJob }

