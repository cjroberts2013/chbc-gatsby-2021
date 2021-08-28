import React from 'react';

const posts = [
    {
      title: 'Aug 22, 2021 - Sunday Morning Worship',
      description: "Help in Time of Need (Hebrews 4:14-16)",
      date: 'Aug 22, 2021',
      imageUrl:
      <iframe title="1st live stream" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F1020347884839116%2Fvideos%2F274231450803671%2F&show_text=false&width=267&t=0" width="267" height="476" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>,
      author: {
        name: 'Rev. Kenneth Hibbs',
      },
    },
    {
      title: 'Aug 15, 2021 - Sunday Morning Worship',
      description: "Your Healing (Isaiah 58:8-11)", 
      date: 'Aug 15, 2021',
      imageUrl:
      <iframe title="2nd live stream" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F1020347884839116%2Fvideos%2F1715968285459108%2F&show_text=false&width=267&t=0" width="267" height="476" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>,
      author: {
        name: 'Rev. Kenneth Hibbs',
      },
    },
  ]
  
  export default function Videos() {
    return (
      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recent Live Streams</h2>
          </div>
          <div className="mt-12 max-w-xl mx-auto grid gap-5 xl:grid-cols-2 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col sm:flex-row rounded-lg shadow-lg overflow-hidden">
                <div className="">
                  <div className="h-full w-full object-cover flex justify-center bg-black">
                  {post.imageUrl}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="">
                      <div className="text-sm font-medium text-gray-900">
                        <p className="hover:underline">
                          {post.author.name}
                        </p>
                      </div>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }