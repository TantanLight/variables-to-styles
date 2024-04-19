import { EventHandler } from '@create-figma-plugin/utilities';

export interface ApplyVariablesHandler extends EventHandler {
  name: 'APPLY_VARIABLES';
  handler: (options: { collectionKey: string }) => void;
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE';
  handler: () => void;
}