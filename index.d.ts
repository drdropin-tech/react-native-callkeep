export type Events =
  | "didReceiveStartCallAction"
  | "answerCall"
  | "endCall"
  | "didActivateAudioSession"
  | "didDisplayIncomingCall"
  | "didPerformSetMutedCallAction";

type HandleType = "generic" | "number" | "email";

interface IOptions {
  ios: {
    appName: string;
    imageName?: string;
    ringtoneSound?: string;
  };
  android: {
    alertTitle: string;
    alertDescription: string;
    cancelButton: string;
    okButton: string;
  };
}

export type DidReceiveStartCallActionPayload = { handle: string };
export type AnswerCallPayload = { callUUID: string };
export type EndCallPayload = AnswerCallPayload;
export type DidDisplayIncomingCallPayload = string | undefined;
export type DidPerformSetMutedCallActionPayload = boolean;
export enum EndCallReasons {
  failed = 1,
  remoteEnded = 2,
  unanswered = 3
}
export default class RNCallKeep {
  static addEventListener(type: Events, handler: (args: any) => void) {}

  static removeEventListener(type: Events, handler: (args: any) => void) {}

  static async setup(options: IOptions): Promise<void> {}

  static displayIncomingCall(
    uuid: string,
    handle: string,
    localizedCallerName?: string,
    handleType?: HandleType,
    hasVideo?: boolean
  ) {}

  /**
   * @description startCall method is available only on iOS.
   */
  static startCall(
    uuid: string,
    handle: string,
    handleType?: HandleType,
    hasVideo?: boolean,
    contactIdentifier?: string
  ) {}

  /**
   * @description reportConnectedOutgoingCallWithUUID method is available only on iOS.
   */
  static reportConnectedOutgoingCallWithUUID(uuid: string) {}
  /**
   * @description reportConnectingOutgoingCallWithUUID method is available only on iOS.
   */
  static reportConnectingOutgoingCallWithUUID(uuid: string) {}
  /**
   * @description reportUpdatedCall method is available only on iOS.
   */
  static reportUpdatedCall(uuid: string, localizedCallerName: string) {}
  /**
   * @description Report that the call ended without the user initiating
   */
  static reportEndCallWithUUID(uuid: string, reason: EndCallReasons) {}

  /**
   * updateDisplay method is available only on Android.
   * @description Sets the Android caller name and number Use this to update the Android display after an outgoing call has started
   */
  static updateDisplay(uuid: string, displayName: string, uri: string) {}

  /**
   * @description When you reject an incoming call.
   */
  static rejectCall(uuid: string) {}

  /**
   * @description When you finish an incoming/outgoing call.
   */
  static endCall(uuid: string) {}

  /**
   * @description End all ongoing connections.
   */
  static endAllCalls() {}

  /**
   * @description supportConnectionService method is available only on Android.
   */
  static supportConnectionService(): boolean {}

  /**
   * @description hasPhoneAccount method is available only on Android.
   */
  static async hasPhoneAccount(): Promise<boolean> {}

  /**
   * @description setMutedCall method is available only on iOS.
   */
  static setMutedCall(uuid: string, muted: boolean) {}

  /**
   * @descriptions sendDTMF is used to send DTMF tones to the PBX.
   */
  static sendDTMF(uuid: string, key: string) {}

  /**
   * @description setMutedCall method is available only on iOS.
   */
  static checkIfBusy(): Promise<boolean> {}

  /**
   * @description setMutedCall method is available only on iOS.
   */
  static checkSpeaker(): Promise<boolean> {}

  /**
   * @description setAvailable method is available only on Android.
   */
  static setAvailable(active: boolean) {}

  /**
   * @description setAvailable method is available only on Android.
   */
  static setCurrentCallActive() {}

  /**
   * @description setAvailable method is available only on Android.
   */
  static backToForeground() {}
}
