pragma solidity ^0.5.0;

contract Fiber {

    event FiberReq(address caller, string calltype, string req);

    /**
      * @dev request function for the web server to pick up 'FiberReq'
             events being emitted on the blockchain
      * @param _calltype the format of the data source being requested
      * @param _req the location of the source where the data will be retrieved 
    */
    function request(string memory _calltype, string memory _req) public returns(bytes32 queryID) {
        emit FiberReq(msg.sender, _calltype, _req);
        queryID = keccak256(abi.encodePacked(msg.sender, _calltype, _req));
    }

}