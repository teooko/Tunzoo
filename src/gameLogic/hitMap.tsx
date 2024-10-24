﻿const hitMap = [
    { time: '6.000', sound: 'snare.mp3' },
    { time: '6.685', sound: 'snare.mp3' },
    { time: '7.371', sound: 'snare.mp3' },
    { time: '8.057', sound: 'snare.mp3' },
    { time: '8.742', sound: 'snare.mp3' },
    { time: '9.428', sound: 'snare.mp3' },
    { time: '10.114', sound: 'snare.mp3' },
    { time: '10.800', sound: 'snare.mp3' },
    { time: '11.485', sound: 'snare.mp3' },
    { time: '11.828', sound: 'snare.mp3' },
    { time: '12.171', sound: 'snare.mp3' },
    { time: '12.514', sound: 'snare.mp3' },
    { time: '12.857', sound: 'snare.mp3' },
    { time: '13.200', sound: 'snare.mp3' },
    { time: '13.542', sound: 'snare.mp3' },
    { time: '13.885', sound: 'snare.mp3' },
    { time: '14.228', sound: 'snare.mp3' },
    { time: '14.571', sound: 'snare.mp3' },
    { time: '14.914', sound: 'snare.mp3' },
    { time: '15.257', sound: 'snare.mp3' },
    { time: '15.600', sound: 'snare.mp3' },
    { time: '15.942', sound: 'snare.mp3' },
    { time: '16.285', sound: 'snare.mp3' },
    { time: '16.628', sound: 'snare.mp3' },
    { time: '16.971', sound: 'snare.mp3' },
    { time: '17.085', sound: 'snare.mp3' },
    { time: '17.200', sound: 'snare.mp3' },
    { time: '17.314', sound: 'snare.mp3' },
    { time: '17.657', sound: 'snare.mp3' },
    { time: '17.771', sound: 'snare.mp3' },
    { time: '17.885', sound: 'snare.mp3' },
    { time: '18.000', sound: 'snare.mp3' },
    { time: '18.342', sound: 'snare.mp3' },
    { time: '18.685', sound: 'snare.mp3' },
    { time: '19.028', sound: 'snare.mp3' },
    { time: '19.371', sound: 'snare.mp3' },
    { time: '19.714', sound: 'snare.mp3' },
    { time: '19.828', sound: 'snare.mp3' },
    { time: '19.942', sound: 'snare.mp3' },
    { time: '20.057', sound: 'snare.mp3' },
    { time: '20.400', sound: 'snare.mp3' },
    { time: '20.514', sound: 'snare.mp3' },
    { time: '20.628', sound: 'snare.mp3' },
    { time: '20.742', sound: 'snare.mp3' },
    { time: '21.085', sound: 'snare.mp3' },
    { time: '21.428', sound: 'snare.mp3' },
    { time: '21.771', sound: 'snare.mp3' },
    { time: '22.457', sound: 'snare.mp3' },
    { time: '22.571', sound: 'snare.mp3' },
    { time: '22.685', sound: 'snare.mp3' },
    { time: '22.800', sound: 'snare.mp3' },
    { time: '23.142', sound: 'snare.mp3' },
    { time: '23.257', sound: 'snare.mp3' },
    { time: '23.371', sound: 'snare.mp3' },
    { time: '23.485', sound: 'snare.mp3' },
    { time: '23.828', sound: 'snare.mp3' },
    { time: '24.171', sound: 'snare.mp3' },
    { time: '24.514', sound: 'snare.mp3' },
    { time: '24.857', sound: 'snare.mp3' },
    { time: '25.200', sound: 'snare.mp3' },
    { time: '25.314', sound: 'snare.mp3' },
    { time: '25.428', sound: 'snare.mp3' },
    { time: '25.542', sound: 'snare.mp3' },
    { time: '25.885', sound: 'snare.mp3' },
    { time: '26.000', sound: 'snare.mp3' },
    { time: '26.114', sound: 'snare.mp3' },
    { time: '26.228', sound: 'snare.mp3' },
    { time: '26.571', sound: 'snare.mp3' },
    { time: '26.914', sound: 'snare.mp3' },
    { time: '27.257', sound: 'snare.mp3' },
    { time: '27.942', sound: 'snare.mp3' },
    { time: '28.285', sound: 'snare.mp3' },
    { time: '28.628', sound: 'snare.mp3' },
    { time: '28.971', sound: 'snare.mp3' },
    { time: '29.314', sound: 'snare.mp3' },
    { time: '29.542', sound: 'snare.mp3' },
    { time: '29.657', sound: 'snare.mp3' },
    { time: '29.885', sound: 'snare.mp3' },
    { time: '30.000', sound: 'snare.mp3' },
    { time: '30.228', sound: 'snare.mp3' },
    { time: '30.342', sound: 'snare.mp3' },
    { time: '30.685', sound: 'snare.mp3' },
    { time: '31.028', sound: 'snare.mp3' },
    { time: '31.371', sound: 'snare.mp3' },
    { time: '31.714', sound: 'snare.mp3' },
    { time: '32.057', sound: 'snare.mp3' },
    { time: '32.285', sound: 'snare.mp3' },
    { time: '32.514', sound: 'snare.mp3' },
    { time: '32.742', sound: 'snare.mp3' },
    { time: '32.971', sound: 'snare.mp3' },
    { time: '33.200', sound: 'snare.mp3' },
    { time: '33.428', sound: 'snare.mp3' },
    { time: '39.085', sound: 'snare.mp3' },
    { time: '39.257', sound: 'snare.mp3' },
    { time: '39.428', sound: 'snare.mp3' },
    { time: '39.600', sound: 'snare.mp3' },
    { time: '39.942', sound: 'snare.mp3' },
    { time: '40.285', sound: 'snare.mp3' },
    { time: '40.457', sound: 'snare.mp3' },
    { time: '40.628', sound: 'snare.mp3' },
]

export default hitMap;