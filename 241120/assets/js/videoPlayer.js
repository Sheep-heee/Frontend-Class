/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst playBtnIcon = playBtn.querySelector(\"i\");\nconst muteBtn = document.getElementById(\"mute\");\nconst muteBtnIcon = muteBtn.querySelector(\"i\");\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst volumeRange = document.getElementById(\"volume\");\nconst timeline = document.getElementById(\"timeline\");\nconst fullScreenBtn = document.getElementById(\"fullscreen\");\nconst fullScreenIcon = fullScreenBtn.querySelector(\"i\");\nconst videoContainer = document.getElementById(\"videoContainer\");\nconst videoControls = document.getElementById(\"videoControls\");\nlet controlsTimeout = null;\nlet controlsMovementTimeout = null;\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nconst handlePlayClick = () => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtnIcon.classList = video.paused ? \"fa-solid fa-play\" : \"fa-solid fa-pause\";\n};\nconst handleMute = () => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  muteBtnIcon.classList = video.muted ? \"fa-solid fa-volume-xmark\" : \"fa-solid fa-volume-high\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\nconst handleVolumeChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  if (video.muted) {\n    video.muted = false;\n    muteBtn.innerText = \"Mute\";\n  }\n  volumeValue = value;\n  video.volume = value;\n};\nconst formatTime = seconds => {\n  return new Date(seconds * 1000).toISOString().substring(14, 19);\n};\nconst handleLoadedMetadata = () => {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\nconst handleTimeUpdate = () => {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime)) + \" \";\n  timeline.value = Math.floor(video.currentTime);\n};\nconst handleTimelineChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  video.currentTime = value;\n};\nconst handleFullscreen = () => {\n  const fullScreen = document.fullscreenElement;\n  if (fullScreen) {\n    document.exitFullscreen();\n    fullScreenIcon.classList = \"fa-solid fa-expand\";\n  } else {\n    videoContainer.requestFullscreen();\n    fullScreenIcon.classList = \"fa-solid fa-compress\";\n  }\n};\nconst hideControls = () => videoControls.classList.remove(\"showing\");\nconst handleControlsMouseMove = () => {\n  if (controlsTimeout) {\n    clearTimeout(controlsTimeout);\n    controlsTimeout = null;\n  }\n  videoControls.classList.add(\"showing\");\n};\nconst handleMouseMove = () => {\n  handleControlsMouseMove();\n  if (controlsMovementTimeout) {\n    clearTimeout(controlsMovementTimeout);\n    controlsMovementTimeout = null;\n  }\n  controlsMovementTimeout = setTimeout(() => {\n    hideControls();\n  }, 3000);\n};\nconst handleMouseLeave = () => {\n  controlsTimeout = setTimeout(() => {\n    hideControls();\n  }, 3000);\n};\nconst changeVideoTime = seconds => {\n  video.currentTime += seconds;\n};\ndocument.addEventListener(\"keyup\", event => {\n  if (event.code === \"Space\") {\n    handlePlayClick();\n  }\n  if (event.code === \"ArrowRight\") {\n    changeVideoTime(5);\n  }\n  if (event.code === \"ArrowLeft\") {\n    changeVideoTime(-5);\n  }\n});\nconst handleEnded = () => {\n  const {\n    dataset: {\n      id\n    }\n  } = videoContainer;\n  fetch(`/api/videos/${id}/view`, {\n    method: \"POST\"\n  });\n};\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMute);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nif (video.readyState >= 1) {\n  handleLoadedMetadata();\n} else {\n  video.addEventListener(\"loadeddata\", handleLoadedMetadata);\n}\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\nvideoControls.addEventListener(\"mousemove\", handleControlsMouseMove);\nvideoControls.addEventListener(\"mouseleave\", handleMouseLeave);\nvideo.addEventListener(\"mousemove\", handleMouseMove);\nvideo.addEventListener(\"mouseleave\", handleMouseLeave);\nvideo.addEventListener(\"click\", handlePlayClick);\nvideo.addEventListener(\"ended\", handleEnded);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nfullScreenBtn.addEventListener(\"click\", handleFullscreen);\n\n//# sourceURL=webpack://nodeproject/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;