import riveWASMResource from '@rive-app/canvas/rive.wasm';
import { RuntimeLoader } from '@rive-app/react-canvas';
import React from 'react';

RuntimeLoader.setWasmUrl(riveWASMResource);

const RiveWasm = () => (
  <link rel="preload" href={riveWASMResource} as="fetch" crossOrigin="anonymous" />
);

export default RiveWasm;
