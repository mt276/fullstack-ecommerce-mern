const Constants = {
  Role: {
    Admin: "7a728fbf-5c98-42dc-aab4-c6d28b9d6ab5",
    Doctor: "7aad65d1-46fb-4bd7-b315-05e94ca5b74b",
    Patient: "f43305a1-fae6-4d51-b3d5-2a6a50584e1d",
  },
  Status: {
    New: "7a728fbf-5c98-42dc-aab4-c6d28b9d6ab5",
    Confirmed: "7aad65d1-46fb-4bd7-b315-05e94ca5b74b",
    Done: "f43305a1-fae6-4d51-b3d5-2a6a50584e1d",
    Cancel: "a8f6e9fa-b6d0-4dd1-a809-368dd50df4d0",
  },
  TimeType: {
    T1_08_09: "7a728fbf-5c98-42dc-aab4-c6d28b9d6ab5",
    T2_09_10: "7aad65d1-46fb-4bd7-b315-05e94ca5b74b",
    T3_10_11: "f43305a1-fae6-4d51-b3d5-2a6a50584e1d",
    T4_11_12: "a8f6e9fa-b6d0-4dd1-a809-368dd50df4d0",
    T5_13_14: "8c0af41d-0617-49ef-b7d1-0dafc5072b52",
    T6_14_15: "c4f2a6e5-3bfb-4973-b5a5-2d6f4c4c0c86",
    T7_15_16: "b2d3e5f1-8c4b-4de0-9c6d-8e4178f7e9c1",
    T8_16_17: "d1a25a6b-5b3e-4b59-9e8f-1f843f5a9a34",
  },
  Position: {
    None: "7a728fbf-5c98-42dc-aab4-c6d28b9d6ab5",
    Master: "7aad65d1-46fb-4bd7-b315-05e94ca5b74b",
    Doctor: "f43305a1-fae6-4d51-b3d5-2a6a50584e1d",
    Associate_Professor: "a8f6e9fa-b6d0-4dd1-a809-368dd50df4d0",
    Professor: "8c0af41d-0617-49ef-b7d1-0dafc5072b52",
  },
};

Object.freeze(Constants);

module.exports = Constants;
