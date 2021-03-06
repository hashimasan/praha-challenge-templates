// todo: ここに単体テストを書いてみましょう！
import { NameApiService } from "../nameApiService";
import axios from "axios";

// jest.mock("../nameApiService");
jest.mock("axios");

const NameApiServiceMock = NameApiService as jest.Mock;
const nameApiServiceMock = new NameApiServiceMock();
const NASM = new NameApiService();

describe('NameApiService getFirstName', () => {

  test('OK', async () => {

    const resp = {data:{first_name: 'Bob'}};
    (axios.get as any).mockResolvedValue(resp);
    // (axios.get as any).mockImplementation(() => Promise.resolve(resp));

    //以下の書き方の違いは？　推奨される方はあるのか
    // NASM.getFirstName().then(data => {
    //   console.log(data);
    // });
    let data = await NASM.getFirstName();
    console.log(data);
    expect(data).toBe('Bob');
  });

  test('LONGER', async () => {
    const resp = {data:{first_name: 'Ashlynn'}};
    (axios.get as any).mockImplementation(() => Promise.resolve(resp));

    expect(NASM.getFirstName()).rejects.toEqual(new Error('firstName is too long!'));

  });
});



// 色々練習用メモ
// describe('NameApiService getFirstName', () => {
  // expect(data).toBe('aaa');

  // test('hoge', async () => {
    // 「https://jestjs.io/docs/ja/mock-functions#モジュールのモック」より
    // const users = [{first_name: 'Bob'}];
    // const resp = {data: users};
    // axios.get.mockResolvedValue(resp);

    // const helloSpy = jest.spyOn(NameApiService.getFirstName.prototype, 'getFirstName')
    // .mockReturnValue('piro piro');
    // const sampleSpy = jest.spyOn(axios.get , "axios.get")
    // .mockReturnValueOnce({
    //   first_name: 'Eugenia'
    // });
    // expect(sampleSpy).not.toHaveBeenCalled();

    //その１
    // return NameApiServiceMock.getFirstName().then(data => {
    //   console.log(data);
    // });
    //その２
    // let data = await NameApiServiceMock.getFirstName();
    // console.log(data);

    //「https://qiita.com/FumioNonaka/items/58358a29850afd7a0f37#分割代入を使う」より
    //なぜnameApiService.tsの方ではconst { data }でうまくいくのにtest.tsの方は以下の
    //書き方じゃないとうまくいかないの？(課題の答えとは関係ないけど)
    // const response = await axios(
    //   "https://random-data-api.com/api/name/random_name"
    // );
    // const firstName = response.data.first_name as string;
    // console.log(firstName);
  // });
// });
