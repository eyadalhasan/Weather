import React from "react"

export function FetchData(url, method, body = {}, options = {}) {
    let _options = {
        ...options
    }


    if (method.toUpperCase() === 'POST') {
        _options.body = JSON.stringify(body)
        
    }
    return fetch(url, {
        method,
        ..._options
    }).then(async (resp) => {
        const status = resp.status
    
        return {
            data: await resp.json(),
            status
        }
    
    })

    

    
    
}

