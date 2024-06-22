import axios from "axios";

class BackService {
  async getProducts(limit: Number, offset: Number) {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer 0e1172be2ebd9a6f5d9589ce8c1fa2ae27dca075f992476203efee34aa6dbe3ec2d35935fb9fa5e895118ebf4806ca753fe3448a2a9c9e482827a9ddd3e5b758ad5411cb59b362d6c7f791a65af8a440d3e85732dc5b75eda51a0f34d82bee31789f2b1d90f93ee5c224ab4b8fd178a1e1d63ee0bcad5c678611beff92e8038571806e973cb95d491666902c9b4ebd365b5699d4a4eb1aa06a26c416555d0bb8a4773c65e576c8b2e6f019e146e822b8e24c137674d242713ffb36e1c51a4989505ebf4bfbdd60e4626afef61a76c28d5c112d91796fa93e069db5e183159767e631b6135f03a1e2ace4d9ec5f9573ebdc6d7a0aad8c773b8171c6b3c8d941f94f71fa3361c59166c0bc12f21390da67ee4869367750db465ef227d07e3d61f11108fa2efe121653a8141f35a1cb7ffcf857ff94fc74b719cea45a1e6b2b1c9204404bdf03e3d125514478`,
        },
      };
      const response = await axios.get(
        `https://server.jampaia.com/api/v1/product/pharmacy/258c414f-0dba-4fee-8eb4-3eed0b9f0e70?limit=${limit}&offset=${offset}`,
        config
      );

      return response?.data;
    } catch (error: TypeError) {
      if (error.response) {
        if (error.response.status == 409) {
          throw new Error(error?.response?.data?.message);
        } else if (error.response.status == 400) {
          throw new Error(
            "Certifique-se de que todos os campos esteja devidamente preenchidos"
          );
        } else if (error.response.status == 401) {
          throw new Error("Token expirado");
        } else
          throw new Error(error?.response?.data?.message || "Erro Interno");
      } else {
        throw new Error("Verifique a sua Internet");
      }
    }
  }
}
export default new BackService();
