// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        uint256 initialSupply;
    }

    NetworkConfig internal networkConfig;

    constructor() {
        if (block.chainid == 11155111) {
            networkConfig = getSepoliaEthConfig();
        } else if (block.chainid == 1) {
            networkConfig = getEthMainnetConfig();
        } else {
            networkConfig = getOrCreateAnvilConfig();
        }
    }

    function getSepoliaEthConfig() public pure returns (NetworkConfig memory) {
        return NetworkConfig({initialSupply: 1000e18});
    }

    function getEthMainnetConfig() public pure returns (NetworkConfig memory) {
        return NetworkConfig({initialSupply: 1_000_000e18});
    }

    function getOrCreateAnvilConfig()
        public
        pure
        returns (NetworkConfig memory)
    {
        return NetworkConfig({initialSupply: 500_000e18});
    }

    function getNetworkConfig() public view returns (NetworkConfig memory) {
        return networkConfig;
    }
}
