pragma solidity ^0.5.0;

import "./FiberAPI.sol";

contract SampleContract is runningFiber {

    function testEvent() public returns(bytes32 queryID) {
        queryID = fiber_req("URL", "https://google.com/");
    }

    function getNet() public pure returns(int) {
        return runningFiber.networkID;
    }

}