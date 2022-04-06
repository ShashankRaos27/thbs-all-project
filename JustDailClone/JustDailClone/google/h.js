var mydata = [
    {
        "nexusVersion": "SNAPSHOT-1.0.0",
        "matrix": {
            "zcord": [
                12, //mydate[0].matrix.zcord[0]
                70
            ],
            "ycord": [
                100,
                45 //mydata[0].matrix.ycord[1]
            ]


        },
        "finalbuild": 07 //mydata[0].finalbuild
    },

    {
        "nexusVersion": "SNAPSHOT-1.0.0",
        "matrix": {
            "zcord": [
                12,
                70
            ],
            "ycord": [
                100,
                45 //mydata[1].matrix.ycord[1]
            ]

        },

        "artifacts": [
            {
                "file": "pom.xml"
            },
            {
                "type": [
                    {
                        "fname": 'diya',
                        "ext": ".png",
                        "size": 1025
                    },
                    {
                        "fname": 'priya',
                        "ext": ".jpeg",
                        "size": 70
                    }
                ]
            }
        ],
        "finalbuild": 12
    }
]





console.log(mydata[0].matrix.zcord[0]);
console.log(mydata[1].matrix.ycord[1]);
console.log(mydata[0].finalbuild);
console.log(mydata[1].matrix.ycord[1]);
console.log(mydata[1].artifacts[0].file);