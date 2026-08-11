function createAPIManager({ cacheTime }) {
    // Requests that are currently running
    const pendingRequests = new Map();

    // Successfully completed requests
    const cache = new Map();

    async function get(url) {
        // 1. Check cache
        const cached = cache.get(url);

        if (cached) {
            const isExpired = Date.now() - cached.timestamp >= cacheTime;

            if (!isExpired) {
                return cached.data;
            }

            // Remove expired cache
            cache.delete(url);
        }

        // 2. Check if the same request is already running
        if (pendingRequests.has(url)) {
            return pendingRequests.get(url);
        }

        // 3. Make the actual request
        const promise = request(url)
            .then((data) => {
                // 4. Store successful response
                cache.set(url, {
                    data,
                    timestamp: Date.now()
                });

                return data;
            })
            .finally(() => {
                // 5. Request is no longer pending
                pendingRequests.delete(url);
            });

        // 6. Store the Promise immediately
        pendingRequests.set(url, promise);

        return promise;
    }

    function clear(url) {
        cache.delete(url);
    }

    function clearAll() {
        cache.clear();
    }

    return {
        get,
        clear,
        clearAll
    };
}