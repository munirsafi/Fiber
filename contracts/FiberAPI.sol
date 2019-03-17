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

    function getFiberWare() internal returns(bool) {
		if(fiberExists(0xEB54E73fe3B3e44Fec06E0F52c4AcD3dd5Ed2087) > 0) {
            networkID = 0;
			fiber = Fiber(0xEB54E73fe3B3e44Fec06E0F52c4AcD3dd5Ed2087); // mainnet
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

    function fiber_req(string memory calltype, string memory request) public returns(bytes32 queryID) {
        queryID = fiber.request(calltype, request);
    }

    function __callback() external pure {
        return;
    }


}