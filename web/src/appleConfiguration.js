import store from 'resources/store';
import { changeProgress, setCofiguredInstance } from 'resources/currentTrack/currentTrack.actions';

document.addEventListener('musickitloaded', () => {
  const music = window.MusicKit.configure({
    developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdHOFlBUUJBSFAifQ.eyJpYXQiOjE1NTYyMjA5OTQsImV4cCI6MTU3MTk0NTc5NCwiaXNzIjoiSDhWTUIzNFo5UiJ9.5blC_YYjNS6Z3PDf8Xd-55Hu9LKN6eBdCpQfcTjqYBtxqCpJPaCL4IbeqIivpG3Fue_se7_PSgRqFVju-m6jTg',
    app: {
      name: 'Radio Together',
      build: '1978.4.1',
    },
  });
  music.addEventListener('playbackTimeDidChange', (result) => {
    changeProgress(result)(store.dispatch);
  });
  setCofiguredInstance()(store.dispatch);
});
