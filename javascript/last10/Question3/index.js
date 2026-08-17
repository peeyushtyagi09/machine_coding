function createTaskQueue(limit){
    if(!Number.isInteger(limit) || limit <= 0){
        throw new Error("Limit must be a positive integer");
    }

    const queue = [];
    
    let running = 0;
    function add(task){
        if (typeof task !== "function"){
            return Promise.reject(
                new TypeError("Task must be a function")
            );
        }

        return new Promise((resolve, reject) => {
            queue.push({
                task,
                resolve,
                reject
            });
            processQueue();
        });
    }

    function processQueue() {
        
    }
}