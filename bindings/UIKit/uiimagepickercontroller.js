// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { UINavigationController } from 'uinavigationcontroller';
import { UIImagePickerControllerDelegate } from 'uiimagepickercontrollerdelegate';

//console.log("UIImagePickerController");
export let UIImagePickerController = UINavigationController.extendClass ("UIImagePickerController", () => ({

    // Setting the Picker Source
    availableMediaTypes:   staticSelector("availableMediaTypesForSourceType:"),
    isSourceTypeAvailable: staticSelector("isSourceTypeAvailable:"),
    sourceType: instanceProperty(),

    // Configuring the Picker
    allowsEditing: instanceProperty(),
    delegate: autoboxProperty(UIImagePickerControllerDelegate),
    mediaTypes: instanceProperty(),
    allowsImageEditing: instanceProperty(), // Deprecated in iOS 3.1

    // Configuring the Video Capture Options
    videoQuality: instanceProperty(),
    videoMaximumDuration: instanceProperty(),

    // Customizing the Camera Controls
    showsCameraControls: instanceProperty(),
    cameraOverlayView: instanceProperty(),
    cameraViewTransform: instanceProperty(),

    // Capturing Still Images or Movies
    takePicture:       instanceSelector("takePicture"),
    startVideoCapture: instanceSelector("startVideoCapture"),
    stopVideoCapture:  instanceSelector("stopVideoCapture"),

    // Configuring the Camera
    cameraDevice: instanceProperty(),
    cameraCaptureMode: instanceProperty(),
    cameraFlashMode: instanceProperty(),
    isCameraDeviceAvailable:              staticSelector("isCameraDeviceAvailable:"),
    availableCaptureModesForCameraDevice: staticSelector("availableCaptureModesForCameraDevice:"),
    isFlashAvailableForCameraDevice:      staticSelector("isFlashAvailableForCameraDevice:")

}));
