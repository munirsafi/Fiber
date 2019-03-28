pragma solidity ^0.5.0;

import "./FiberAPI.sol";

contract SampleContract is runningFiber {

    string public bitcoinPrice;

    function testEvent() public returns(bytes32 queryID) {
        queryID = fiber_req("URL", "https://google.com/");
    }

    function getNet() public pure returns(int) {
        return runningFiber.networkID;
    }

    function __callback(bytes32 _fiberID, string memory _response) public {
        bitcoinPrice = _response;
    }

}