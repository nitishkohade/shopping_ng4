export const apiUrls =
    {
        "credentials": {
            "global": {
                "grant_type": "client_credentials",
                "client_id": "hV6lfg3EBAiVX5EZjbpexLoLhGhuGiWR",
                
            },
            "authorization": "https://api.t-mobile.com/oauth/v1/access"
        },
        "url": {
            "product": {
                "host0": "http://stage.sp10050e1e.guided.ss-omtrdc.net",
                "host": "https://api.t-mobile.com/raptor/v1",
                "browse": {
                    "service": "/search-promote/",
                    "parameters": {
                        "phone": "?type=browse&ps=handset",
                        "accessory": "?type=browse&pt=accessory",
                        "internet-device": "?type=browse&ps=internet-device"
                    }
                },
                "detail": {
                    "service": "/productDetails"
                }
            }

        }
    }
