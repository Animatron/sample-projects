// http://editor.animatron.com/#p=74d7ef51678b47901855bf20&c=80510019e4621312ae50a602
// http://player-dev.animatron.com/go?15dbef51e3fa53af1976c71d-v0.9.13&w=550&h=450

var anm_scenes = anm_scenes || {};

anm_scenes.rotate_n_orient_to_path = {
    "meta": {
        "id": "74d7ef51678b47901855bf20",
        "created": 1374672756329,
        "modified": 1374672752418,
        "author": "Ulric Wilfred",
        "description": "",
        "name": "Rotate & Orient to Path",
        "copyright": "Copyright (c) by Ulric Wilfred",
        "duration": 10.0,
        "numberOfScenes": 1,
        "projectAccessType": "Public",
        "projectAccessReadOnly": true
    },
    "data": {
        "swatches": [{
            "color": "#80ff00",
            "rgba": "#80ff00"
        }, {
            "color": "#ff0000",
            "rgba": "#ff0000"
        }]
    },
    "anim": {
        "dimension": [550.0, 450.0],
        "framerate": 24.0,
        "background": {
            "color": "white",
            "rgba": "white"
        },
        "elements": [{
            "id": "2cd3d25ef6b58cb9bba18a02",
            "name": "$$$LIBRARY$$$",
            "end": {
                "type": "once"
            }
        }, {
            "id": "62551d34e57917944a02d705",
            "stroke": {},
            "fill": {
                "color": "#ff0000",
                "rgba": "#ff0000"
            },
            "shadow": {},
            "path": "M0.0 0.0 L70.0 0.0 L70.0 70.0 L0.0 70.0 L0.0 0.0 M0.0 0.0 Z",
            "brushWidth": 10.0,
            "errorThreshold": 7.0,
            "round-rect": [0.0, 0.0, 0.0, 0.0]
        }, {
            "id": "6e87c1ac2c182de872657c05",
            "stroke": {},
            "fill": {
                "color": "#2291ea",
                "rgba": "#2291ea"
            },
            "shadow": {},
            "path": "M0.0 0.0 L65.0 0.0 L65.0 65.0 L0.0 65.0 L0.0 0.0 M0.0 0.0 Z",
            "brushWidth": 10.0,
            "errorThreshold": 7.0,
            "round-rect": [0.0, 0.0, 0.0, 0.0]
        }, {
            "id": "80510019e4621312ae50a602",
            "name": "Scene1",
            "layers": [{
                "id": "c56da1269bef7aab6426b121",
                "name": "Star 1",
                "band": [0.0, 10.0],
                "eid": "fb2bf090615cf0454289670b",
                "tweens": [{
                    "type": "Scale",
                    "band": [0.0, 10.0],
                    "data": [0.9943198052504657, 0.9974163311902902, 0.9943198052504657, 0.9974163311902902]
                }, {
                    "type": "Translate",
                    "band": [0.0, 10.0],
                    "path": "M-0.261 8.894 L-0.261 252.894 L299.739 252.894 L299.739 -0.106 L-1.261 -0.106 L-1.261 0.894 Z"
                }],
                "visible": true,
                "outline": false,
                "locked": false,
                "outline-color": "#577d58",
                "reg": ["45.738", "41.001"],
                "opaque": false,
                "rotate-to-path": true,
                "last-frames-defined": []
            }, {
                "id": "3be759399f286d163dad2311",
                "name": "Shape 2",
                "band": [0.0, 10.0],
                "eid": "62551d34e57917944a02d705",
                "tweens": [{
                    "type": "Translate",
                    "band": [0.0, 10.0],
                    "path": "M249.0 205.0 L249.0 449.0 L549.0 449.0 L549.0 196.0 L248.0 196.0 L248.0 197.0 Z"
                }],
                "visible": true,
                "outline": false,
                "locked": false,
                "outline-color": "#532b71",
                "reg": ["35.0", "35.0"],
                "opaque": false,
                "rotate-to-path": false,
                "last-frames-defined": []
            }, {
                "id": "2a627ce84a5a5bb3a1f0691f",
                "name": "Shape 1",
                "band": [0.0, 10.0],
                "eid": "6e87c1ac2c182de872657c05",
                "tweens": [{
                    "type": "Translate",
                    "band": [0.0, 10.0],
                    "path": "M75.0 75.0 C75.0 75.0 137.929 10.514 175.0 13.0 C212.071 15.486 180.404 85.396 239.0 86.0 C297.596 86.604 337.213 15.181 369.0 15.0 C400.787 14.819 408.106 50.766 415.0 85.0 C421.894 119.234 414.436 133.304 398.0 159.0 C381.564 184.696 363.256 188.059 344.0 196.0 C324.744 203.941 321.977 198.506 301.0 199.0 C280.023 199.494 337.501 199.972 259.0 198.0 C180.499 196.028 130.214 188.832 102.0 194.0 C73.786 199.168 59.395 197.872 57.0 235.0 C54.605 272.128 66.551 317.201 94.0 318.0 C121.449 318.799 161.016 278.889 160.0 238.0 C158.984 197.111 127.198 158.508 90.0 157.0 C52.802 155.492 10.947 189.097 12.0 232.0 C13.053 274.903 78.318 288.248 94.0 320.0 C109.682 351.752 93.0 396.0 93.0 396.0 Z"
                }],
                "visible": true,
                "outline": false,
                "locked": false,
                "outline-color": "#fea597",
                "reg": ["32.5", "32.5"],
                "opaque": false,
                "rotate-to-path": true,
                "last-frames-defined": []
            }],
            "end": {
                "type": "once"
            }
        }, {
            "id": "fb2bf090615cf0454289670b",
            "stroke": {},
            "fill": {
                "color": "#80ff00",
                "rgba": "#80ff00"
            },
            "shadow": {},
            "path": "M46.0 -0.5 L32.481 26.893 L2.251 31.285 L24.126 52.607 L18.962 82.715 L46.0 68.5 L73.038 82.715 L67.874 52.607 L89.749 31.285 L59.519 26.893 L46.0 -0.5 Z",
            "brushWidth": 10.0,
            "errorThreshold": 7.0,
            "star_options": [46.0, 50.0, 5.0]
        }],
        "scenes": ["80510019e4621312ae50a602", "2cd3d25ef6b58cb9bba18a02"]
    }
};