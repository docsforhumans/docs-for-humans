import constantMirror from 'constant-mirror'

export const uiTypes = constantMirror('TEST')

export function test() {
  return {
    type: uiTypes.TEST,
  }
}
