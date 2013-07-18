var anm_scenes = anm_scenes || {};

anm_scenes.jumping_ball = {
    "meta": {
        "id": "9305e051331f213c6a037165",
        "created": 1373635987200,
        "modified": 1373632445285,
        "author": "Ulric Wilfred",
        "description": "",
        "name": "New Project Copy 2",
        "copyright": "Copyright (c) by Ulric Wilfred",
        "duration": 10.0,
        "numberOfScenes": 1,
        "projectAccessType": "Public",
        "projectAccessReadOnly": true
    },
    "data": {
        "swatches": []
    },
    "anim": {
        "dimension": [550.0, 450.0],
        "framerate": 24.0,
        "background": {
            "color": "white",
            "rgba": "white"
        },
        "elements": [{
            "id": "2d3a582ca447a00e7bc18402",
            "name": "Scene1",
            "layers": [{
                "id": "52a3b49aa23080976c4ed09d",
                "name": "Group 1",
                "band": [0.0, 10.0],
                "eid": "9e170bb8a7f4dbab2de3ee01",
                "tweens": [{
                    "type": "Translate",
                    "band": [0.0, 10.0],
                    "path": "M162.5 184.0 L162.5 184.0 Z"
                }],
                "visible": true,
                "outline": false,
                "locked": false,
                "outline-color": "#c3a3e6",
                "reg": ["0.0", "0.0"],
                "opaque": false,
                "rotate-to-path": false,
                "last-frames-defined": []
            }],
            "end": {
                "type": "once"
            }
        }, {
            "id": "9e170bb8a7f4dbab2de3ee01",
            "name": "Group 1",
            "layers": [{
                "id": "a8004c35d6c7e91d22b3e726",
                "name": "Shape 1",
                "band": [0.0, 2.0],
                "eid": "e0925c62bc95de8232296106",
                "tweens": [{
                    "type": "Translate",
                    "band": [0.0, 1.0],
                    "path": "M0.0 0.0 L0.0 -152.0 Z"
                }, {
                    "type": "Translate",
                    "band": [1.0, 2.0],
                    "path": "M0.0 -152.0 L0.0 0.0 Z"
                }],
                "visible": true,
                "outline": false,
                "locked": false,
                "outline-color": "#00cae8",
                "reg": ["80.5", "82.0"],
                "opaque": false,
                "rotate-to-path": false,
                "last-frames-defined": ["Translate"]
            }],
            "end": {
                "type": "loop"
            }
        }, {
            "id": "e0925c62bc95de8232296106",
            "stroke": {},
            "fill": {
                "color": "#2291ea",
                "rgba": "#2291ea"
            },
            "shadow": {},
            "path": "M0.0 82.0 C0.0 36.713 36.041 0.0 80.5 0.0 C124.959 0.0 161.0 36.713 161.0 82.0 C161.0 127.287 124.959 164.0 80.5 164.0 C36.041 164.0 0.0 127.287 0.0 82.0 Z",
            "brushWidth": 10.0,
            "errorThreshold": 7.0
        }, {
            "id": "ea1d06022a71ccc63e661402",
            "name": "$$$LIBRARY$$$",
            "end": {
                "type": "once"
            }
        }],
        "scenes": ["2d3a582ca447a00e7bc18402", "ea1d06022a71ccc63e661402"]
    }
};