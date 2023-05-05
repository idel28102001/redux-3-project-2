interface Config {
  params: Record<string, string>;
}

export default function fetchData<T>(url: string, config?: Config, signal?: AbortSignal): Promise<T> {
  let params = '';
  if (config && config.params) {
    params = '?' + new URLSearchParams(config.params).toString();
  }
  return fetch(`${url}${params}`, { signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText || 'Произошла ошибка');
      }
      return response.json() as T;
    })
    .catch((e) => {
      if (e instanceof DOMException) {
        throw new DOMException('ABORT');
      } else {
        throw new Error('Неизвестная ошибка');
      }
    });
}
