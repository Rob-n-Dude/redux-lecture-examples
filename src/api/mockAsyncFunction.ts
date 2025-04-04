export const mockAsyncFunction = (): Promise<void> => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
)

export const mockAsyncRejectFunction = ():Promise<void> => (
  new Promise((_, reject) => {
    setTimeout(() => {
      reject()
    }, 1000)
  })
)