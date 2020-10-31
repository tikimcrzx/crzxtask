import config from './../config';
import jwt from 'jsonwebtoken';

class JWT {
  private secretKey = config.jwtSecrect as string;

  // payload token
  sign(data, expiresIn: number) {
    return jwt.sign({ user: data.user }, this.secretKey, {
      expiresIn,
    });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, this.secretKey) as string;
    } catch (error) {
      return config.MESSAGES.TOKEN_VERIFICARION_FAILED;
    }
  }
}

export default JWT;
