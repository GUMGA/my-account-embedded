export default `

    <div class="modal-header modal-header-my-profile">
      <i class="glyphicon glyphicon-remove close-crop-my-profile" ng-click="close()"></i>
      <span>Fotos do Reconhecimento Facial</span>
    </div>
    <div class="modal-body modal-body-my-profile" style="margin-bottom: -5px;height: 449px; text-align: center;">
      <video id="video-area-my-profile" width="320" height="240" preload autoplay loop muted ></video>
      <canvas id="canvas-area-my-profile" width="320" height="240"></canvas>
      
      <div class="my-profile-images">
        <img ng-repeat="image in images" class="img-circle" ng-src="{{image.image}}" style="float: left;width: 100px;height: 100px;margin-right: 10px;">
      </div>
      
    </div>
    <div class="modal-footer modal-footer-my-profile">
      <button class="btn btn-take-my-profile"
              type="button"
              ng-click="take()">
              <i class="glyphicon glyphicon-camera"></i>
              </button>
    </div>
    
    <canvas id="pic-my-profile" style="display: none;"></canvas>
    
    
    <style>
        .my-profile-images{
            background: #f5f5f5;
            width: 100%;
            padding: 15px;
            overflow-x: scroll;
            margin-top: 35px;
            display: inline-flex;
        }
        #canvas-area-my-profile {
            margin-left: -320px;
        }
         #video-area-my-profile {
            /*box-shadow: 0px 1px 9px 0px #333131;*/
            margin: 0 auto;
            margin-top: 20px;
        }
</style>
    
    
    
    `
