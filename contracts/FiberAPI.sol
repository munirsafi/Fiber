pragma solidity ^0.5.0;

import "./Fiber.sol";

contract runningFiber {
    Fiber fiber;
    int public networkID = -1;

    constructor() public {
        getFiberWare();
    }

    function fiberExists(address _addr) private view returns(uint _size) {
        assembly {
            _size := extcodesize(_addr)
        }
    }

    modifier networkSet() {
        require(networkID != -1, "No network set");
        _;
    }

    modifier fiberAccess() {
		require(msg.sender == 0x7Ed1826B9590d91Fe0A321830498480B3c9202b0, "Unauthorized attempt to use callback function!");
        _;
    }

    function getFiberWare() internal returns(bool) {
		if(fiberExists(0x7Ed1826B9590d91Fe0A321830498480B3c9202b0) > 0) {
            networkID = 0;
			fiber = Fiber(0x7Ed1826B9590d91Fe0A321830498480B3c9202b0); // mainnet
            return true;
        }
        if(fiberExists(0x0000000000000000000000000000000000000001) > 0) {
            networkID = 1;
            fiber = Fiber(0x01); // ropsten
            return true;
        }
        if(fiberExists(0x0000000000000000000000000000000000000002) > 0) {
            networkID = 2;
            fiber = Fiber(0x02); // rinkeby
            return true;
        }
        if(fiberExists(0x0000000000000000000000000000000000000003) > 0) {
            fiber = Fiber(0x03); // kovan
            return true;
        }
        return false;
    }

    function fiber_req(string memory calltype, string memory request) networkSet public returns(bytes32 queryID) {
        queryID = fiber.request(calltype, request);
    }

    function __callback(bytes32 _fiberID, string memory _response) public {
        return;
    }


}