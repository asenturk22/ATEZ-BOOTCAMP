function enqueueJob(job) {
    //logic
    return {
        job: job,
        state: 'que',
        onComplete: function (cb) { return cb(job); }
    };
}
var j = {
    recipientMail: 'abc@abc.com',
    subject: 'asdşfasdkfjaşsd',
    name: 'Send Mail',
    state: 'started',
    start: function () { return console.log("started"); }
};
var run = enqueueJob(j);
run.onComplete(function (job) {
    job.state;
});
