import { NearNetworkId } from '../../enums';

/**
 * SDK configuration options
 */
export interface SDKConfigurationOptions {
  /**
   * NEAR network to connect to
   */
  networkId: keyof typeof NearNetworkId;

  /**
   * Which NEAR account id to use for the calls
   */
  accountId: string;

  /**
   * NEAR account public key
   */
  publicKey: string;

  /**
   * NEAR account secret key
   */
  secretKey: string;

  /**
   * Whether to debug the client or not
   */
  debug?: boolean;
}
