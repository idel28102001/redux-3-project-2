const timer = (n: number) => new Promise((res) => setTimeout(res, n));

export async function retry<Ret>(cb: () => Promise<Ret>, retryTries: number, timeout: number) {
  for (let i = 0; i < retryTries; i++) {
    try {
      return await cb();
    } catch (e) {
      if (e instanceof DOMException) throw e;
      await timer(timeout);
    }
  }
  throw new Error('Не удалось получить результат');
}
