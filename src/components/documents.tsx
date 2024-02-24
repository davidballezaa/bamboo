import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";

export function Documents() {
  return (
    <div>
      <div />
      <div className="px-6 py-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Uploaded Documents</h2>
            <div className="border border-gray-200 rounded-lg">
              <div className="overflow-auto w-full">
                <table className="min-w-full divide-y divide-gray-200 text-sm w-full">
                  <thead className="text-left font-semibold bg-gray-50">
                    <tr className="grid grid-cols-4 items-center px-4">
                      <th className="py-2">Name</th>
                      <th className="py-2">Date Uploaded</th>
                      <th className="py-2" />
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="grid grid-cols-4 items-center px-4">
                      <td className="py-2">Introduction to AI.pdf</td>
                      <td className="py-2">Yesterday</td>
                      <td className="py-2">
                        <Button size="sm">Delete</Button>
                      </td>
                    </tr>
                    <tr className="grid grid-cols-4 items-center px-4">
                      <td className="py-2">AI Ethics Guidelines.docx</td>
                      <td className="py-2">2 days ago</td>
                      <td className="py-2">
                        <Button size="sm">Delete</Button>
                      </td>
                    </tr>
                    <tr className="grid grid-cols-4 items-center px-4">
                      <td className="py-2">AI Best Practices.pdf</td>
                      <td className="py-2">1 week ago</td>
                      <td className="py-2">
                        <Button size="sm">Delete</Button>
                      </td>
                    </tr>
                    <tr className="grid grid-cols-4 items-center px-4">
                      <td className="py-2">AI Training Manual.pdf</td>
                      <td className="py-2">2 weeks ago</td>
                      <td className="py-2">
                        <Button size="sm">Delete</Button>
                      </td>
                    </tr>
                    <tr className="grid grid-cols-4 items-center px-4">
                      <td className="py-2">AI Research Papers.zip</td>
                      <td className="py-2">1 month ago</td>
                      <td className="py-2">
                        <Button size="sm">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Upload New Document</h2>
            <div className="flex w-full max-w-sm items-start gap-2">
              <Input accept=".pdf,.docx,.zip" id="file" multiple type="file" />
              <label
                className="cursor-pointer inline-flex items-center rounded-lg border border-gray-200 px-3 py-2 text-sm
                                border-dashed dark:border-gray-800"
                htmlFor="file"
              >
                <UploadIcon className="w-4 h-4 mr-2" />
                Upload File
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 p-6 border-t">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
