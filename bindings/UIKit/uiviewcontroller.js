// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, chainCtor, sig } from '../objc';
import { UIResponder } from 'uiresponder';

//console.log "UIViewController"
export let UIViewController = UIResponder.extendClass ("UIViewController", () => ({
    constructor: function (handle, arg2) {
      if (typeof (handle) === 'string') {
	chainCtor (UIViewController, this, []);
	this.initWithNibNameAndBundle(handle, arg2);
      }
      else {
	chainCtor (UIViewController, this, arguments);
      }
    },

    // Creating a View Controller Using Nib Files
    initWithNibNameAndBundle: instanceSelector("initWithNibName:bundle:"),
    nibName: instanceProperty(),
    nibBundle: instanceProperty(),

    // Managing the View
    loadView:       instanceSelector("loadView").returns( function() { return sig.Void; } ),
    viewDidLoad:    instanceSelector("viewDidLoad"),
    viewWillUnload: instanceSelector("viewWillUnload"),
    viewDidUnload:  instanceSelector("viewDidUnload"),
    isViewLoaded:   instanceSelector("isViewLoaded"),
    view: instanceProperty(),
    title: instanceProperty(),
    contentSizeForViewInPopover: instanceProperty(),
    modalInPopover: instanceProperty(),

    // Using a Storyboard
    performSegue:     instanceSelector("performSegueWithIdentifier:sender:"),
    prepareForSegue:  instanceSelector("prepareForSegue:sender:"),
    storyboard: instanceProperty(),

    // Responding to View Events
    viewWillAppear:    instanceSelector("viewWillAppear:"),
    viewDidAppear:     instanceSelector("viewDidAppear:"),
    viewWillDisappear: instanceSelector("viewWillDisappear:"),
    viewDidDisappear:  instanceSelector("viewDidDisappear:"),

    // Configuring the View’s Layout Behavior
    wantsFullScreenLayout: instanceProperty(),

    // Configuring the View Rotation Settings
    interfaceOrientation: instanceProperty(),
    shouldAutorotateToInterfaceOrientation: instanceSelector("shouldAutorotateToInterfaceOrientation:"),
    attemptRotationToDeviceOrientation:     instanceSelector("attemptRotationToDeviceOrientation"),
    rotatingHeaderView:                     instanceSelector("rotatingHeaderView"),
    rotatingFooterView:                     instanceSelector("rotatingFooterView"),

    // Responding to View Rotation Events
    willRotateToInterfaceOrientation:                        instanceSelector("willRotateToInterfaceOrientation:duration:"),
    willAnimateRotationToInterfaceOrientation:               instanceSelector("willAnimateRotationToInterfaceOrientation:duration:"),
    didRotateFromInterfaceOrientation:                       instanceSelector("didRotateFromInterfaceOrientation:"),
    didAnimateFirstHalfOfRotationToInterfaceOrientation:     instanceSelector("didAnimateFirstHalfOfRotationToInterfaceOrientation:"), // Deprecated in iOS 5.0
    willAnimateFirstHalfOfRotationToInterfaceOrientation:    instanceSelector("willAnimateFirstHalfOfRotationToInterfaceOrientation:duration:"), // Deprecated in iOS 5.0
    willAnimateSecondHalfOfRotationFromInterfaceOrientation: instanceSelector("willAnimateSecondHalfOfRotationFromInterfaceOrientation:duration:"), // Deprecated in iOS 5.0

    // Managing Child View Controllers
    childViewControllers: instanceProperty(),
    addChildViewController:                                                 instanceSelector("addChildViewController:"),
    removeFromParentViewController:                                         instanceSelector("removeFromParentViewController"),
    automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers: instanceSelector("automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers"),

    // Managing the Layout of Contained View Controllers
    viewDidLayoutSubviews:            instanceSelector("viewDidLayoutSubviews"),
    viewWillLayoutSubviews:           instanceSelector("viewWillLayoutSubviews"),
    willMoveToParentViewController:   instanceSelector("willMoveToParentViewController:"),
    isMovingFromParentViewController: instanceSelector("isMovingFromParentViewController"),
    isMovingToParentViewController:   instanceSelector("isMovingToParentViewController"),
    didMoveToParentViewController:    instanceSelector("didMoveToParentViewController:"),

    // Initiating Transitions Between Contained View Controllers
    transition:                       instanceSelector("transitionFromViewController:toViewController:duration:options:animations:completion:"),

    // Handling Memory Warnings
    didReceiveMemoryWarning:          instanceSelector("didReceiveMemoryWarning"),

    // Getting Other Related View Controllers
    parentViewController: instanceProperty(),
    searchDisplayController: instanceProperty(),
    splitViewController: instanceProperty(),
    modalViewController: instanceProperty(),
    navigationController: instanceProperty(),
    tabBarController: instanceProperty(),

    // Presenting View Controllers
    present:          instanceSelector("presentViewController:animated:completion:"),
    isBeingPresented: instanceSelector("isBeingPresented"),
    dismiss:          instanceSelector("dismissViewControllerAnimated:completion:"),
    isBeingDismissed: instanceSelector("isBeingDismissed"),
    definesPresentationContext: instanceProperty(),
    providesPresentationContextTransitionStyle: instanceProperty(),
    presentingViewController: instanceProperty(),
    presentedViewController: instanceProperty(),

    // Configuring a Navigation Interface
    setEditing:     instanceSelector("setEditing:animated:"),
    editButtonItem: instanceSelector("editButtonItem"),
    navigationItem: instanceProperty(),
    editing: instanceProperty({ set: function(v) { this.setEditing(v, false); } }),
    hidesBottomBarWhenPushed: instanceProperty(),

    // Configuring the Navigation Controller’s Toolbar
    setToolbarItems: instanceSelector("setToolbarItems:animated:"),
    toolbarItems: instanceProperty({ set: function(v) { return this.setToolbarItems(v, false); } }),

    // Configuring Tab Bar Items
    tabBarItem: instanceProperty(),

    // Presenting Modal Views
    presentModal:                       instanceSelector("presentModalViewController:animated:"),
    dismissModal:                       instanceSelector("dismissModalViewControllerAnimated:"),
    disablesAutomaticKeyboardDismissal: instanceSelector("disablesAutomaticKeyboardDismissal"),
    modalTransitionStyle: instanceProperty(),
    modalPresentationStyle: instanceProperty()

}));
