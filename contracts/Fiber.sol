pragma solidity ^0.5.0;

contract Fiber {

    event FiberReq(string calltype, string req);

    function request(string memory _calltype, string memory _req) public returns(bytes32 queryID) {
        emit FiberReq(_calltype, _req);
        queryID = keccak256(abi.encodePacked(msg.sender, _calltype, _req));
    }

}