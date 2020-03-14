import { classicBehavior } from '../classic-beh.js';

let mMgr = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBehavior],
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function(event) {
      if(!this.data.playing) {
        if(mMgr.src == this.properties.src) {
          mMgr.play();
        } else {
          mMgr.src = this.properties.src;
          mMgr.title = this.properties.title;
        }
        this.setData({
          playing : true
        }); 
      } else {
        mMgr.pause();
        this.setData({
          playing : false
        }); 
      }
    }
  }
})
