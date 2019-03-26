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

    function getFiberWare() internal returns(bool) {
		if(fiberExists(0xa57d0B20BcCcC137779fe6C55d1AD1644f83706D) > 0) {
            networkID = 0;
			fiber = Fiber(0xa57d0B20BcCcC137779fe6C55d1AD1644f83706D); // mainnet
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

    function __callback() external pure {
        return;
    }


}