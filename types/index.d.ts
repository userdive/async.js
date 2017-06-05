/** Declaration file generated by dts-gen */
export default function inject (source?: string, attributes?: object): USERDIVETracker.USERDIVEObject.USERDIVEAgent;

declare namespace USERDIVETracker.USERDIVEObject {

  type commandCreate = 'create'
  type commandSend = 'send'
  type sendType = 'pageview'

  interface USERDIVEAgent {
    (
      command: commandCreate,
      projectId: string,
      settings?: any | 'auto'
    )
    (
      command: commandSend,
      type: sendType,
      page?: string
    )
  }
}
