import React from "react";

function CompanyManagementTool() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">企業管理ツール</h1>
      <div className="flex flex-wrap gap-4">
        <div className="bg-blue-200 p-4 rounded-lg w-1/2">
          <h2 className="text-lg font-semibold">企業ボール</h2>
          {/* 企業ボールの内容をここに表示 */}
        </div>
        <div className="bg-green-200 p-4 rounded-lg w-1/2">
          <h2 className="text-lg font-semibold">自分ボール</h2>
          {/* 自分ボールの内容をここに表示 */}
        </div>
        <div className="bg-yellow-200 p-4 rounded-lg w-1/2">
          <h2 className="text-lg font-semibold">これから受ける企業</h2>
          {/* これから受ける企業の内容をここに表示 */}
        </div>
        <div className="bg-red-200 p-4 rounded-lg w-1/2">
          <h2 className="text-lg font-semibold">落ちた企業</h2>
          {/* 落ちた企業の内容をここに表示 */}
        </div>
      </div>
    </div>
  );
}

export default CompanyManagementTool;
