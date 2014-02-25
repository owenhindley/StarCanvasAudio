StarCanvasAudio
===============

Pure Data audio scene & node interface for the [B-Reel Star Canvas experiment]('http://www.b-reel.com/projects/digital/case/492/star-canvas', 'Star Canvas').

This repository shows you how we implemented the audio for the above experiment.

### Requirements ###


Pure Data Extended - download [here]('http://puredata.info/downloads/pd-extended', 'Pd Extended')

RJLibs - included in this repository, but also available for download [here]('https://github.com/rjdj/rjlib', 'RJLibs')

### Installation ###

Ensure the contents of the `pd-externals` folder is accessible by Pure Data, you can change where it looks for externals in PD's `Preferences` panel.

### Playing ###

Turn up the volume on the `soundoutput` object, and you should hear the background drone. Click on the large yellow buttons to test the various samples.

### OSC Integration ###

Inside the `node-interface` folder, there is a module which exports a number of methods for interacting with the patch from within Node, via OSC.

Call `setup` to begin with with the port number and IP address that PD is running on (usually port `8000`) to start, then experiment with calling the different methods available. All arguments are usually `ints` in the range of 0-100.


### Credits ###

See above video for B-Reel credits, also to [Yi Wen Lin]('blog.bongiovi.tw/star-canvas-making-of/', 'Star Canvas Making Of') for the bulk of the WebGL code you can see.


