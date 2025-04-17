import React from 'react';

const DownloadButton = ({ version }) => {
    return (
        <button
            className="nx-mt-4 nx-px-4 nx-py-2 nx-rounded-full nx-border  nx-text-xl"
            onClick={() => window.location.href = `https://github.com/Bl1c-S/IPBanGUI/releases/download/v${version}/IPBanGUI-v${version}.zip`}
        >
            Завантажити IPBanGUI v{version}
        </button>
    );
};

export default DownloadButton;
