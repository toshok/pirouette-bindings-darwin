import { instanceProperty, instanceSelector } from '../objc';
import { NSView } from 'nsview';

export let NSBox = NSView.extendClass("NSBox", () => ({
    // Configuring Boxes
    //
    borderRect:    instanceProperty({ set: null }),
    boxType:       instanceProperty(),
    borderType:    instanceProperty(),
    isTransparent: instanceProperty({ set: "setTransparent:" }),
    title:         instanceProperty(),
    titleFont:     instanceProperty(),
    titlePosition: instanceProperty(),
    titleCell: 	   instanceProperty({ set: null }),
    titleRect: 	   instanceProperty({ set: null }),

    // Customizing
    //
    borderColor:  instanceProperty(),
    borderWidth:  instanceProperty(),
    cornerRadius: instanceProperty(),
    fillColor:    instanceProperty(),

    // Managing Content
    //
    contentView:        instanceProperty(),
    contentViewMargins: instanceProperty(),

    // Sizing
    //
    setFrameFromContentFrame: instanceSelector("setFrameFromContentFrame:"),
    sizeToFit:                instanceSelector()
}));
