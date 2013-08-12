var anm_scenes = anm_scenes || {};

anm_scenes.sample = {  // NO CHANGES
    "meta": {
        "created": 1375147775454,
        "modified": 1375147775454,
        "author": "",
        "description": "",
        "name": "My Project",
        "copyright": "",
        "duration": 10,
        "numberOfScenes": 1,
        "projectAccessType": "Public",
        "projectAccessReadOnly": false
    },
    "data": {
        "swatches": []
    },
    "anim": {
        "dimension": [
            500,
            350
        ],
        "framerate": 24,
        "background": null,
        "elements": [
            {
                "id": "1ecbd27dc925f972e0083002",
                "n": "My Scene 1",      // name
                "l": [                  // layers
                    {
                        "id": "ddbbb8b4b4e3e3004ef8a81d",
                        "n": "Rect",    // name
                        "b": [          // band
                            0,
                            10
                        ],
                        "e": "476c5a5ae8cf80460b987805",  // element id
                        "v": true,                        // visible, default is true
                        "r": [                            // reg point
                            "10.0",
                            "20.0"
                        ],
                        "f": false,                      // opaque, default is false
                        "p": false,                      // rotate-to-path, default is false
                        "m": 2,                          // masked
                    },
                    {
                        "id": "8b27e11d8a6f6cb1d299f2cb",
                        "n": "Clip",
                        "b": [
                            0,
                            10
                        ],
                        "e": "45321e2fb3cf5baa20755e01",
                        "v": true,
                        "r": [
                            "20.0",
                            "30.0"
                        ],
                        "f": false,
                        "p": false,
                    }
                ],
                "e": {                // end action
                    "t": "o"          // type: o[nce], l[oop], b[ounce], s[tay]
                }
            },
            {
                "id": "23ec4dce646eea914a646006",
                "s": {                            // stroke
                    "w": 4,                       // width
                    "p": {                        // paint
                        "r": "rgba(0,0,255,0.5)", // rgba
                    }
                },
                "f": {                            // fill
                    "x": [                        // array of [x0, y0, x1, y1] -> linear gradient
                        0,
                        0,
                        1,
                        1
                    ],
                    "r": [                        // rgbas
                        "red",
                        "green",
                        "yellow"
                    ],
                    "o": [                        // offsets
                        0,
                        0.2,
                        1
                    ]
                },
                "w": {},                         // shadow
                "p": "M10.0 20.0 C10.0 14.477 14.477 10.0 20.0 10.0 C25.523 10.0 30.0 14.477 30.0 20.0 C30.0 25.523 25.523 30.0 20.0 30.0 C14.477 30.0 10.0 25.523 10.0 20.0 Z",           // path
            },
            {
                "id": "3627c251a9df68c195e06f06",
                "s": {
                    "w": 4,
                    "p": {
                        "r": "rgba(0,0,255,0.5)",
                    }
                },
                "f": {            // fill
                    "x": [        // array of [x0, y0, r0, x1, y1, r1] -> radial gradient
                        0,
                        0,
                        0,
                        1,
                        1,
                        1
                    ],
                    "r": [
                        "red",
                        "green",
                        "yellow"
                    ],
                    "o": [
                        0,
                        0.2,
                        1
                    ]
                },
                "w": {},
                "p": "M20.0 170.0 C20.0 87.157 64.772 20.0 120.0 20.0 C175.228 20.0 220.0 87.157 220.0 170.0 C220.0 252.843 175.228 320.0 120.0 320.0 C64.772 320.0 20.0 252.843 20.0 170.0 Z",
            },
            {
                "id": "45321e2fb3cf5baa20755e01",
                "n": "My Clip",
                "l": [
                    {
                        "id": "3c22e5c287cab8206d05a510",
                        "n": "child1",
                        "b": [
                            0,
                            10
                        ],
                        "e": "23ec4dce646eea914a646006",
                        "t": [                   // tweens
                            {
                                "t": "r",        // type: r[otate], s[cale], [s]h[ear], [t]ranslate, a[lpha]
                                "b": [           // band
                                    0,
                                    10
                                ],
                                "d": [           // data, if it's one element, then second one is the same
                                    2
                                ]
                            },
                            {
                                "t": "s",       // type s[cale]
                                "b": [
                                    0,
                                    10
                                ],
                                "d": [
                                    2,
                                    3
                                ]
                            },
                            {
                                "t": "h",       // type sHear
                                "b": [
                                    0,
                                    10
                                ],
                                "d": [
                                    1.1,
                                    2
                                ]
                            },
                            {
                                "t": "t",
                                "b": [
                                    0,
                                    10
                                ],
                                "p": "M20.0 20.0 L20.0 20.0 Z"  // path
                            }
                        ],
                        "v": true,
                        "r": [
                            "0.0",
                            "0.0"
                        ],
                        "f": false,
                        "p": false,
                    },
                    {
                        "id": "ce3fe9dc8e1a2c4d23a25390",
                        "n": "child2",
                        "b": [
                            0,
                            10
                        ],
                        "e": "3627c251a9df68c195e06f06",
                        "t": [
                            {
                                "t": "r",
                                "b": [
                                    0,
                                    5
                                ],
                                "d": [
                                    0,
                                    -2
                                ]
                            },
                            {
                                "t": "r",
                                "b": [
                                    5,
                                    10
                                ],
                                "d": [
                                    -2
                                ]
                            },
                            {
                                "t": "s",
                                "b": [
                                    0,
                                    5
                                ],
                                "d": [
                                    1,
                                    1,
                                    2,
                                    3
                                ]
                            },
                            {
                                "t": "s",
                                "b": [
                                    5,
                                    10
                                ],
                                "d": [
                                    2,
                                    3,
                                    1,
                                    1
                                ]
                            },
                            {
                                "t": "h",
                                "b": [
                                    0,
                                    5
                                ],
                                "d": [
                                    0,
                                    0,
                                    1.1,
                                    2
                                ]
                            },
                            {
                                "t": "h",
                                "b": [
                                    5,
                                    10
                                ],
                                "d": [
                                    1.1,
                                    2
                                ]
                            },
                            {
                                "t": "t",
                                "b": [
                                    0,
                                    10
                                ],
                                "p": "M385.95 -808.23 L385.95 -808.23 Z"
                            }
                        ],
                        "v": true,
                        "r": [
                            "100.0",
                            "100.0"
                        ],
                        "f": false,
                        "p": false,
                    }
                ],
                "e": {
                    "t": "o"
                }
            },
            {
                "id": "476c5a5ae8cf80460b987805",
                "s": {
                    "w": 2,
                    "p": {
                        "r": "red"
                    },
                    "c": "round",
                    "j": "round"
                },
                "f": {
                    "r": "red"
                },
                "w": {
                    "p": {
                        "r": "red"
                    },
                    "b": 30,
                    "x": 1,
                    "y": 2
                },
                "p": "M0.0 0.0 L123.0 0.0 L123.0 456.0 L0.0 456.0 L0.0 0.0 M0.0 0.0 Z",
            }
        ],
        "scenes": [
            "1ecbd27dc925f972e0083002"
        ],
        "metaclips": []
    }
};