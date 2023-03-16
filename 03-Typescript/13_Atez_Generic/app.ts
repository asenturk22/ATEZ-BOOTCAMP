type Job = {
    name: string;
    state: string; 
    start: ()=> void;
}

type JobRun<T extends Job> = {
    job: T;
    state: string;
    onComplete: (cb:(job:T)=> void)=> void
}
 
type SendEmail = Job & {
    recipientMail: string;
    subject: string;
}

function enqueueJob<T extends Job> (job: T) : JobRun<T> {
    //logic
    return {
        job,
        state: 'que',
        onComplete : (cb: (job: T)=> void) => cb(job),
    }
}

const j: SendEmail = {
    recipientMail: 'abc@abc.com',
    subject: 'asdşfasdkfjaşsd',
    name: 'Send Mail',
    state: 'started',
    start: ()=> console.log("started"),
}

const run = enqueueJob(j);
run.onComplete( (job)=> {
    job.state
})