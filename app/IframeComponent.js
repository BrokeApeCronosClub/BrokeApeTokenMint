import React from 'react';

const IframeComponent = () => {
  const iframeStyle = {
    maxWidth: '100%',
    overflow: 'visible',
    border: '5px solid rgba(0, 0, 0, 0.6)', // 60% transparent black border
    borderRadius: '15px', // Rounded corners with a 15px radius
  };

  return (
    <iframe
      src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0x6a48204814243E8bC0e31b2286d02FcA51248DB2&chain=%7B%22name%22%3A%22Cronos+Mainnet%22%2C%22chain%22%3A%22CRO%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcronos.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Cronos%22%2C%22symbol%22%3A%22CRO%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22cro%22%2C%22chainId%22%3A25%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22cronos%22%7D&clientId=3fbb4107fe615d1b91b5c92ae87414b6&tokenId=0&theme=dark&primaryColor=orange"
      width="550px"
      height="600px"
      style={iframeStyle} // Apply the style here
      frameBorder="0"
    ></iframe>
  );
};

export default IframeComponent;
In this code, we've added the borderRadius property to round the corners with a 15px radius, and we've set the border property to '15px solid rgba(0, 0, 0, 0.6)' to create a 60% transparent black border around the iframe. You can adjust the radius or transparency level as needed.





