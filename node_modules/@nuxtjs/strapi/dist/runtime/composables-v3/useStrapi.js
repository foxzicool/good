import { useStrapiClient } from "#imports";
export const useStrapi = () => {
  const client = useStrapiClient();
  const count = (contentType, params) => {
    return client(`/${contentType}/count`, { method: "GET", params });
  };
  const find = (contentType, params) => {
    return client(`/${contentType}`, { method: "GET", params });
  };
  const findOne = (contentType, id, params) => {
    if (typeof id === "object") {
      params = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "GET", params });
  };
  const create = (contentType, data) => {
    return client(`/${contentType}`, { method: "POST", body: data });
  };
  const update = (contentType, id, data) => {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "PUT", body: data });
  };
  const _delete = (contentType, id) => {
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "DELETE" });
  };
  return {
    count,
    find,
    findOne,
    create,
    update,
    delete: _delete
  };
};
