pragma solidity ^0.5.0;

contract Fiber {

    event FiberReq(address caller, string calltype, string req);

    function request(string memory _calltype, string memory _req) public returns(bytes32 queryID) {
        emit FiberReq(msg.sender, _calltype, _req);
        queryID = keccak256(abi.encodePacked(msg.sender, _calltype, _req));
    }

}