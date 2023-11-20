import {useauthStore} from "../store/auth";

test('我测试求和', () => {
  const authStore = useauthStore()
  console.log(authStore.id)
})